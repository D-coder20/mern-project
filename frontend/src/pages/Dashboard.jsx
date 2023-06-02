import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/goalItem";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  //   console.log("inside dashboard");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   }

  //   if (!user) {
  //     navigate("/login");
  //   }

  //   dispatch(getGoals());

  //   return () => {
  //     dispatch(reset());
  //   };
  // }, [user, navigate]);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <section className="heading">
        <h1>{user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
    </>
  );
}

export default Dashboard;
