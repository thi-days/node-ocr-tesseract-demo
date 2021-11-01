import express, { Application } from 'express';

export const appSetup = (app: Application): boolean => {
  if (!app) {
    return false;
  }

  try {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    return true;
  } catch {
    return false;
  }
};
