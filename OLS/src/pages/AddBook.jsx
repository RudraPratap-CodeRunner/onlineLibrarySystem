import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

let nextId = 21; // Start from 21 and increment on each addition

export default function AddBook() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    description: '',
    rating: '',
    category: '',
    popularity: 'false',
    cover_image: null,
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    ['title', 'author', 'description', 'rating', 'category', 'popularity'].forEach((key) => {
      if (!form[key].toString().trim()) errs[key] = 'Required';
    });
    if (!form.cover_image) errs.cover_image = 'Image is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, cover_image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBook = {
      ...form,
      id: nextId++,
      popularity: form.popularity === 'true',
    };

    dispatch(addBook(newBook));
    navigate('/browsebooks'); // Update route if needed
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title, Author, Description, Rating */}
        {['title', 'author', 'description', 'rating'].map((field) => (
          <div key={field}>
            <input
              className="w-full p-2 border focus:border-2 focus:outline-none focus:border-blue-500"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}

        {/* Category Dropdown */}
        <div>
          <select
            className="w-full p-2 border  focus:border-2 focus:outline-none focus:border-blue-500"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Self-Help">Self-Help</option>
            <option value="History">History</option>
            <option value="Biology">Biology</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>

        {/* Popularity Dropdown */}
        <div>
          <select
            className="w-full   p-2 border  focus:border-2 focus:outline-none focus:border-blue-500"
            value={form.popularity}
            onChange={(e) => setForm({ ...form, popularity: e.target.value })}
          >
            <option value="">Select Popularity</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          {errors.popularity && <p className="text-red-500 text-sm">{errors.popularity}</p>}
        </div>

        {/* Cover Image Upload */}
        <div>
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border focus:border-2 focus:outline-none focus:border-blue-500"
            onChange={handleImageChange}
          />
          {errors.cover_image && <p className="text-red-500 text-sm">{errors.cover_image}</p>}
        </div>

        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}
