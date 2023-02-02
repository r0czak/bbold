import React, {useState, useContext, useEffect} from 'react';
import {Keyboard} from 'react-native';

export function RegisterValidation(
  data,
  handleError: (arg0: string, arg1: string) => void,
): boolean {
  Keyboard.dismiss();
  const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  let isValid: boolean = true;

  if (!data.username || data.username.length < 3) {
    handleError('Wprowadź poprawną nazwę użytkownika', 'usernameError');
    isValid = false;
  } else {
    handleError('', 'usernameError');
    isValid = true;
  }

  if (!data.password || data.password.length < 6) {
    handleError('Wprowadź poprawne hasło', 'passwordError');
    isValid = false;
  } else if (passwordRegex.test(data.password)) {
    handleError(
      'Hasło powinno zawierać dużą literę, liczbę i znak specjalny, minimum 6 znaków',
      'passwordError',
    );
    isValid = false;
  } else {
    handleError('', 'passwordError');
    isValid = true;
  }

  if (!data.email) {
    handleError('Wprowadź email', 'emailError');
    isValid = false;
  } else if (emailRegex.test(data.email) || data.email.length < 5) {
    handleError('Wprowadź poprawny email', 'emailError');
    isValid = false;
  } else {
    handleError('', 'emailError');
    isValid = true;
  }

  if (!data.firstname) {
    handleError('Wprowadź swoje imie', 'firstnameError');
    isValid = false;
  } else {
    handleError('', 'firstnameError');
    isValid = true;
  }

  if (!data.lastname) {
    handleError('Wprowadź swoje nazwisko', 'lastnameError');
    isValid = false;
  } else {
    handleError('', 'lastnameError');
    isValid = true;
  }

  if (!data.peselNumber || data.peselNumber < 11) {
    handleError('Wprowadź poprawny numer pesel', 'peselNumberError');
    isValid = false;
  } else {
    handleError('', 'peselNumberError');
    isValid = true;
  }

  if (!data.birthdate) {
    handleError('Wprowadź swoją datę urodzenia', 'birthdateError');
    isValid = false;
  } else {
    handleError('', 'birthdateError');
    isValid = true;
  }

  if (!data.gender) {
    handleError('Wybierz swoją płeć', 'genderError');
    isValid = false;
  } else {
    handleError('', 'genderError');
    isValid = true;
  }

  if (!data.bloodType) {
    handleError('Wybierz swoją grupę krwi', 'bloodTypeError');
    isValid = false;
  } else {
    handleError('', 'bloodTypeError');
    isValid = true;
  }

  return isValid;
}
