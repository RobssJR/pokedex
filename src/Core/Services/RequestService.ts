export class RequestService {
    public static async Request<T>(route: string): Promise<T | null> {
        try {
            const response = await fetch(route);
            
            if (!response.ok) {
                throw new Error('Erro na solicitação: ' + response.status);
            }
            
            const jsonRequest = await response.json();
            
            return jsonRequest as T;
        } catch (error) {
            console.error('Erro ao processar a solicitação:', error);
            return null;
        }
    }
}