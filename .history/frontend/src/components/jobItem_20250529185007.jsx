import { useDispatch } from 'react-redux';
import { deleteJob, updateJob } from '../feature/jobSlice';

const JobItem = ({ job }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteJob(job._id));
    }
  };

  const handleUpdate = () => {
    const updatedJob = {
      title: "Updated Title",
      description: "Updated Description",
    };
    dispatch(updateJob({ id: job._id, data: updatedJob }));
  };

  return (
    <div className="p-4 border rounded">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default JobItem;
