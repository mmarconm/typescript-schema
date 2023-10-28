// Path: main.ts

// Criação de tipos com Types
type UserProps = {
    name: string;
    age: number;
    password: string;
    created_at: Date;
};

// Quando precisa adicionar um campo em especifico usando herança
type UserAdminProps = UserProps & {
    role: string;
};

// Quando precisa pegar um campo em especifico usando primitivos
type Address = string;
const address: Address = 'Rua dos bobos';

// Quando precisa omitir um campo em especifico
type CEOProps1 = Omit<UserAdminProps, 'password'>;

// Quando precisa omitir mais de um campo em especifico
type CEOProps2 = Omit<UserAdminProps, 'password' | 'age'>;

// Quando precisa pegar um ou mais campos em especifico
type GuestProps = Pick<UserAdminProps, 'name' | 'age'>;

// Definindo tipos para uma lista com type e interface
type Addresses = [number, string];
interface IAddresses extends Array<number | string> {
    0: number;
    1: string;
}
const addresses: Addresses = [1, 'Rua dos bobos'];

// Extraindo tipos de algo ou objeto.
const Project1 = {
    title: "Projeto 1",
    especification: {
        areaSize: 100,
        rooms: 3,
    }
};
// A baixo estamos extraindo um tipo de objeto usando typeof
// fazendo com o que o typescript entenda que o tipo de ProjectProps
type Project1Props = typeof Project1;
type Project1EspecificationProps = typeof Project1.especification;

// Caso voce ja tem como definição que os valores, poderá usar `as const`
// para que o typescript entenda que os valores serão sempre os mesmos
// Ex: 
const Project2 = {
    title: "Projeto 1",
    especification: {
        areaSize: 100,
        rooms: 3,
    }
} as const;

type Projec2t1Props = typeof Project2;
type Project21EspecificationProps = typeof Project2.especification;

// Tipos podem ser usados para classes tambem.
// E pode ser feito de duas maneiras.
class User1 {
    name: string;
    age: number;
    password: string;
    created_at: Date;
    constructor(props: UserProps) {
        this.name = props.name;
        this.age = props.age;
        this.password = props.password;
        this.created_at = props.created_at;
    }
}
const user1 = new User1({
    name: 'User 1',
    age: 20,
    password: '123456',
    created_at: new Date(),
});

class User2 implements UserProps {
    name: string;
    age: number;
    password: string;
    created_at: Date;
    constructor(name: string, age: number, password: string, created_at: Date) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.created_at = created_at;
    }
}
const user2 = new User2('Marcelo', 20, '1234', new Date());

// Generics
// Generics são tipos que são definidos apenas quando o objeto é criado.
function createArrayPair<T, K>(input1: T, input2: K): Array<T | K> {
    return [input1, input2]
}
// Using arrow function
// const createArrayPair = <T, K>(input1: T, input2: K): Array<T | K> {
//     return [input1, input2]
// }

const array1 = createArrayPair(3, 'foo')
const array2 = createArrayPair('bar', 4)

function getIndexOfArrayItem<T>(array: T[], arrayItem: T): number {
    return array.findIndex((item) => item === arrayItem)
}

const array3 = [1, 2, 3, 4, 5]
const array4 = ['foo', 'bar', 'baz']
getIndexOfArrayItem(array3, 3) // 2

// Generics com classes
class Queue<T> {
    private data: Array<T> = []

    push(item: T) {
        this.data.push(item)
    }

    pop(): T | undefined {
        return this.data.shift()
    }
}

const queue = new Queue<number>()
queue.push(0)

// Valores pre definidos usando types
type TShirtType1 = 'P' | 'M' | 'G';
type TShirtType2 = {
    size: 'P' | 'M' | 'G';
    color: 'red' | 'blue' | 'green';
} 
