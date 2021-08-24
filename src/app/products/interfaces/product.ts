export interface Product {

    id        :   number;
    name      :   string;
    quantity  :   number;
    quantityMax:   number;
    type_id   :   number;
    type      :   {id: number; name: string};
    prio      :   boolean;
    price     :   number;
    typeName ?:   string;
    description:  string;
    image     : string
}
