export declare enum DeviceType {
    MOBILE = "mobile"
}
/**
 * add listener to detect screen though device type
 */
export declare const useUpdateDeviceStatus: (deviceType: DeviceType, callback: (width: number) => void) => void;
