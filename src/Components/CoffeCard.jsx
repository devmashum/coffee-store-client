import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainig = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remainig)
                        }
                    })

            }
        })
    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex gap-2">
                <div>  <h2 className="card-title">Name:{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p></div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical gap-2">
                        <button className="btn btn-active">View</button>
                        <Link to={`/updatecoffee/${_id}`}> <button className="btn btn-active">Edit</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn bg-red-600">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;