interface IPerson {
    name: string;
    age: number;
}

interface IWorker extends IPerson {
    position: string;
    salary: number;
}

class WorkerImpl implements IWorker {
    name: string;
    age: number;
    position: string;
    salary: number;

    constructor(name: string, age: number, position: string, salary: number) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }

    public changeSalary(newSalary: number): number {
        if(newSalary < 0) {
            this.salary = 0;
            return this.salary;
        }

        return this.salary += newSalary;
    }
}