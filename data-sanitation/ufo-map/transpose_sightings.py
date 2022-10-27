from geopy.geocoders import Nominatim
import pandas as pd
import json, string, random, glob

def id_generator(size=6, chars=string.ascii_uppercase + string.digits):
    return "".join(random.choice(chars) for _ in range(size))


def fetch_sightings():
    master_list = []
    csv_files = glob.glob("/home/calshius/dev-projects/ufo-map-python/csv-output/*.csv")
    print(csv_files)
    df_list = (pd.read_csv(file) for file in csv_files)
    df = pd.concat(df_list, ignore_index=True)
    df = df.fillna("nothing")
    df = df.replace("Not Given", "nothing")
    df = df.replace("not given", "nothing")
    df = df[df.Date != "Date"]
    for ind in df.index:
        sighting = {}
        sighting["date"] = df["Date"][ind]
        sighting["area"] = df["Area"][ind]
        sighting["town"] = df["Town"][ind]
        sighting["incident"] = df["Incident"][ind]
        master_list.append(sighting)
    return master_list


def fetch_geos(sightings):
    sighting_geos = []
    location_finder = Nominatim(user_agent="tutorial", timeout=3)
    for idx, sighting in enumerate(sightings):
        id = id_generator()
        sighting["id"] = id
        try:
            if ("nothing" in sighting["town"]) and ("nothing" in sighting["area"]):
                print("No location information provided")
                pass
            elif "nothing" in sighting["area"]:
                location = location_finder.geocode(
                    f"{sighting['town'].replace(' ','-')}", country_codes=["gb"]
                ).raw
                sighting["coordinates"] = [location["lat"], location["lon"]]
            elif "nothing" in sighting["town"]:
                location = location_finder.geocode(
                    f"{sighting['area'].replace(' ','-')}", country_codes=["gb"]
                ).raw
                sighting["coordinates"] = [location["lat"], location["lon"]]
            else:
                location = location_finder.geocode(
                    f"{sighting['town'].replace(' ','-')}", country_codes=["gb"]
                ).raw
                sighting["coordinates"] = [location["lat"], location["lon"]]

            print(sighting)

            if "coordinates" in sighting:
                sighting_geos.append(sighting)

        except (TypeError, AttributeError) as error:
            print(
                f"Poor data: {error} - Bad location name - area: {sighting['area']}, town: {sighting['town']}"
            )

    return sighting_geos


master_list = fetch_sightings()

response = fetch_geos(master_list)

with open(
    "../ufo-map-js/src/data/sighting_geos.json",
    "w",
) as f:
    f.write(json.dumps(response, indent=4, sort_keys=True))

print(json.dumps(response, indent=4, sort_keys=True))
