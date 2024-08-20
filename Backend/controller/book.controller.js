import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

//Save create book to database
export const createBook = async(req, res) => {
   try {
        const book = await Book.create(req.body)
        res.status(200).json(book);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }

};

//get all books
export const allBook = async(req, res) => {
  try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

};

// update a book
export const updateBook = async(req, res) => {
   try {
        const {id} = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);
        // we cannot find any book in database
        if(!book){
            return res.status(404).json({message: `cannot find any book with ID ${id}`})
        }
        const updatedBook = await Book.findById(id);
        res.status(200).json(updatedBook);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

//get book by ID
export const getBookById = async(req, res) => {
  try {
        const {id} = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({message: error.message})
    }

};

// delete a book
export const deleteBook = async(req, res) => {
  try {
        const {id} = req.params;
        const book = await Book.findByIdAndDelete(id);
        if(!book){
            return res.status(404).json({message: `cannot find any book with ID ${id}`})
        }
        res.status(200).json(book);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }


};
