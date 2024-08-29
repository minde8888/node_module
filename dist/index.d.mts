type SayHelloProps = {
    firstName: string;
    lastName?: string;
    age?: number;
};

declare function sayHello({ firstName, lastName, age }: SayHelloProps): void;

export { type SayHelloProps, sayHello };
