// declare .scss module
declare module '*.scss' {
    const content: {
        [key: string]: string
    }
    
    export = content
}