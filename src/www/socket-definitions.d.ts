export interface SocketInterface {
    state: SocketState;
    onData: (data: any) => void;
    onClose: (data: any) => void;
    onError: (data: any) => void;
    write(data: any, success: () => void, error: (err: Error) => void): void;
    close(success: (val: any) => void, error: (err: Error) => void): void;
    open(host: string, port: string | number, success: () => void, error: (err: Error) => void): void;
}
export declare enum SocketState {
    CLOSED = 0,
    OPENING = 1,
    OPENED = 2,
    CLOSING = 3
}
export declare type SocketStatic = any;
