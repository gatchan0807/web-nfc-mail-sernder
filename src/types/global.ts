declare global {
  interface Window {
    NDEFReader: NDEFReader;
    NDEFWriter: NDEFWriter;
  }

  interface NDEFScanOptions {
    id?: string
    recordType?: string
    mediaType?: string
    signal?: any
  }
  class NDEFReader {
    scan: (options?: NDEFScanOptions) => Promise<any>;
    onerror: (error: any) => void;
    onreading: (event: NDEFReadingEvent) => void;
  }
  class NDEFWriter {
    write: (message: NDEFMEssage) => Promise<any>;
  }
  interface NDEFMEssage {
    records: (NDEFRecord | NDEFRecordInput)[];
  }
  interface NDEFReadingEvent extends Event {
    serialNumber: string;
    message: NDEFMEssage;
  }
  interface NDEFRecord {
    recordType: string;
    mediaType?: string;
    id?: string;
    data?: ArrayBufferView | ArrayBuffer;
    encoding?: string;
    lang?: string;
    toRecords?: Function;
  }
  interface NDEFRecordInput {
    recordType: string;
    mediaType?: string;
    id?: string;
    data?: string;
    encoding?: string;
    lang?: string;
    toRecords?: Function;
  }
  // type PermissionName = "geolocation" | "notifications" | "push" | "midi" | "camera" | "microphone" | "speaker" | "device-info" | "background-sync" | "bluetooth" | "persistent-storage" | "ambient-light-sensor" | "accelerometer" | "gyroscope" | "magnetometer" | "clipboard"
  interface NDEFPermissionDescriptor {
    name: "nfc";
  }
}

export type FIXME_any = any