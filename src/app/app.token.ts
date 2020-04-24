import { InjectionToken } from '@angular/core';

/**
 * File created by suenlue on 24.04.20.
 * Copyright (c) 2020 by netTrek GmbH & Co. KG
 */
export const USER_TOKEN: InjectionToken<string> =
  new InjectionToken<string>('dieser Wert beinhaltet einen User');
export const USERS_TOKEN: InjectionToken<string[]> =
  new InjectionToken<string[]>('Liste von Usern');
