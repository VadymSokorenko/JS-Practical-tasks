export class Book {
    id: number;
    name: string;
    author: string;
    genre: string;
    rating: number;
    description: string;
    image: string;

    public constructor(id: number, name: string, author: string, genre: string, rating: number, description: string, image: string) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.rating = rating;
        this.description = description;
        this.image = image;
    }
  }
