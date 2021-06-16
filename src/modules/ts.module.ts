const field: string  = 'hello Typescript'
interface WFM {
    field: string
}

const wfm: WFM = { field: field }

console.log('[Type]', wfm)