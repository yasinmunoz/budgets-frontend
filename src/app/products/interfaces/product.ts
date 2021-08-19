export interface Product {

    id        :   number;
    name      :   string;
    cuantity  :   number;
    type_id   :   number;
    type      :   {id: number; name: string};
    prio      :   boolean;
    price     :   number;
    typeName ?: string;
}
