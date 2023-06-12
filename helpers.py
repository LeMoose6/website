from csv import DictReader, DictWriter
from flask import Flask, redirect, render_template, request, session
from flask_session import Session

def get_data(csv):
    data = []
    with open(csv, "r") as file:
        reader = csv.DictReader(file)
        for row in reader:
            data.append(row)
    
    return data


def write_data(csv, dictionary):
    with open(csv, "w") as file:
        data = get_data(file)
        writer = csv.DictWriter(file, fieldnames = data.keys())

        writer.writeheader()
        for row in data:
            writer.writerow(row)

        writer.write(dictionary)
