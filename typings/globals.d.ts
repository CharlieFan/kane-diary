// declare .scss module
declare module '*.scss' {
    const content: {
        [key: string]: any
    }
    
    export = content
}