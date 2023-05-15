export class Project {
    id: BigInteger;
    name: string;
    image: {
        link: string;
    };
    groups: [{
        name: string;
        url: string;
        id: BigInteger;
    }];
    url: string;
}
