import axios from '../custom-axios/axios';

const BookService = {
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/books/create", {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies,
        });
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/books/update/${id}`, {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies" : availableCopies,
        });
    },
    markAsTakenBook: (id) => {
        return axios.put(`/books/mark-as-taken/${id}`);
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    }
}

export default BookService;
