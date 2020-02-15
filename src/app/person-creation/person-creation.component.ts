import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-creation',
  templateUrl: './person-creation.component.html',
  styleUrls: ['./person-creation.component.css']
})
export class PersonCreationComponent implements OnInit {

  personFormGroup: FormGroup;
  ageValues: string[] = [];
  personList: Person[] = [];
  hobbies: FormArray;
  isNewPerson: boolean = true;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personFormGroup = new FormGroup({
      personId: new FormControl(),
      firstName: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      lastName: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$")]),
      age: new FormControl(),
      favouriteColor: new FormControl(),
      hobby: new FormArray([new FormControl()])
    });

    this.hobbies = this.personFormGroup.get('hobby') as FormArray;

    for (let i = 1; i < 100; i++) {
      this.ageValues.push("" + i);
    }

    this.loadAllPersons();
  }

  saveOrUpdatePerson() {
    this.personFormGroup.controls.firstName.markAsTouched();
    this.personFormGroup.controls.lastName.markAsTouched();

    if(this.isFirstNameEmpty() || this.isLastNameEmpty()) {
      return;
    }

    this.trimFormValues();

    if(this.isNewPerson) {
      this.personService.createPerson(this.personFormGroup.value).subscribe(
        response => {
          this.clearFormValues();
          this.loadAllPersons();
        },
        error => {
          console.log("Error while saving person!");
        }
      );
    } else {
      this.personService.updatePerson(this.personFormGroup.value).subscribe(
        response => {
          this.clearFormValues();
          this.loadAllPersons();
        },
        error => {
          console.log("Error while updating person!");
        }
      );
    }
  }

  fetchPerson(person: Person) {
    this.personService.getPerson(person.personId).subscribe(
      response => {
        this.clearFormValues();
        this.loadFormContent(response.body);
      },
      error => {
        console.log("Error while retrieving one person data!");
      }
    );
  }

  loadAllPersons() {
    this.personService.getAllPersons().subscribe(
      response => {
        if (response != null && response.body != null) {
          this.personList = response.body;
        } else {
          this.personList = [];
        }
      },
      error => {
        console.log("Error while retrieving all person data!");
      }
    );
  }

  removePerson(person: Person) {
    this.personService.removePerson(person.personId).subscribe(
      response => {
        this.loadAllPersons();
      },
      error => {
        console.log("Error while removing one person!");
      }
    );
  }

  clearFormValues() {
    this.personFormGroup.reset();
    this.isNewPerson = true;

    let noOfHobbies = this.hobbies.length;
    for (let i = 1; i < noOfHobbies; i++) {
      this.hobbies.removeAt(1);
    }
  }

  isFirstNameEmpty(): boolean {
    let firstNameControl = this.personFormGroup.controls.firstName;
    if (firstNameControl.invalid && (firstNameControl.touched || firstNameControl.dirty)) {
      return true;
    } 
    return false;
  }

  isLastNameEmpty(): boolean {
    let lastNameControl = this.personFormGroup.controls.lastName;
    if (lastNameControl.invalid && (lastNameControl.touched || lastNameControl.dirty)) {
      return true;
    }
    return false;
  }

  private addHobby() {
    this.hobbies.push(new FormControl());
  }

  private removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  private loadFormContent(person: Person) {
    this.personFormGroup.patchValue(person);
    this.isNewPerson = false;

    if (person.hobby.length > 0) {
      person.hobby.forEach((hobby, index) => {
        if (index != 0) {
          this.hobbies.push(new FormControl(hobby));
        }
      });
    }
  }

  private isActionButtonDisabled(person: Person): boolean {
    if(person.personId == this.personFormGroup.value.personId) {
      return true;
    }
    return false;
  }

  private trimFormValues() {
    let favouriteColor = this.personFormGroup.value.favouriteColor;
    if(favouriteColor) {
      this.personFormGroup.value.favouriteColor = (favouriteColor.trim().length > 0) ? favouriteColor.trim() : null;
    }

    if(this.personFormGroup.value.hobby) {
      for(let hobby of this.personFormGroup.value.hobby) {
        if(hobby) {
          hobby = (hobby.trim().length > 0) ? hobby.trim() : null;
        }
      }
    }
  }
}
