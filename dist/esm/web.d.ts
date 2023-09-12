import { WebPlugin } from '@capacitor/core';
import type { LocationPlugin } from './definitions';
export declare class LocationWeb extends WebPlugin implements LocationPlugin {
    isMocked(): Promise<boolean>;
    isLastLocationMocked(): Promise<boolean>;
    installedMockPermissionApps(): Promise<boolean>;
}
