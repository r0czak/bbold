import React, {useState, useContext, useEffect} from 'react';
import {Keyboard} from 'react-native';

export function LoginValidation(
  data: {username: string; password: string},
  handleError: (arg0: string, arg1: string) => void,
): boolean {
  Keyboard.dismiss();
  let isValid: boolean = true;

  if (!data.username) {
    handleError('Wprowadź nazwę użytkownika', 'usernameError');
    isValid = false;
  } else if (data.username.length < 3) {
    handleError('Wprowadź poprawną nazwę użytkownika', 'usernameError');
    isValid = false;
  } else {
    handleError('', 'usernameError');
    isValid = true;
  }

  if (!data.password) {
    handleError('Wprowadź hasło', 'passwordError');
    isValid = false;
  } else if (data.password.length < 6) {
    handleError('Wprowadź poprawne hasło', 'passwordError');
    isValid = false;
  } else {
    handleError('', 'passwordError');
    isValid = true;
  }

  return isValid;
}
