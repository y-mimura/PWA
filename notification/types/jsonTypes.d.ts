declare module '*/web-push-keys.json' {
    interface Keys {
        serverPrivate: string;
        serverPublic: string;
        endpoint: string;
        clientPublic: string;
        authSecret: string;
    }
  
    const value: Keys;
    export = value;
}