from tabula.io import convert_into

def convert_sightings_to_csv(url):
    url_sliced = url.split("/")
    file_name = url_sliced[-1].replace(".pdf", ".csv")
    convert_into(
        url.strip(),
        f"csv-output/{file_name}",
        output_format="csv",
        lattice=True,
        pages="all",
    )


with open("pdf-list.txt") as file_list:
    for url in file_list:
        convert_sightings_to_csv(url)
