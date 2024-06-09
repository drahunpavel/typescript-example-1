type ReadOrWrite = 'read' | 'write';
type Bulk = 'bulk' | '';

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`; //type Access = "canRead" | "canReadBulk" | "canWrite" | "canWriteBulk"



type ErrorOrSuccess = 'error' | 'success';

type ResponseType3 = {
    result: `http${Capitalize<ErrorOrSuccess>}` //result: "httpError" | "httpSuccess"
}

const a2: ResponseType3 = {
    result: 'httpSuccess'
}