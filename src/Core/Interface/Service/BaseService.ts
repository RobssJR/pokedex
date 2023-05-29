import { RequestService } from "../../Services/RequestService";

export class BaseService {
    public async GetByUrl<T>(url: string): Promise<T| null> {
        return RequestService.Request<T>(url);
    }
}