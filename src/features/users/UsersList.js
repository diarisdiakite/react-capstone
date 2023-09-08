import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAllUsers } from './usersSlice';
import { selectAllFollowedCompanies } from '../companies/companiesSlice';

function UsersList() {
  const { userId } = useParams();
  const users = useSelector(selectAllUsers);

  const userFollowedCompanies = useSelector(
    (state) => selectAllFollowedCompanies(state, Number(userId)),
  );

  const content = users.map((user) => (
    <div key={user.id}>
      <h2 key={user.id}>
        <Link to={`/users/${user.id}`}>
          {user.name}
          {' '}
          (
          {userFollowedCompanies.length}
          )
        </Link>
      </h2>
      <p key={`description-${user.id}`}>
        {user.description}
        {' '}
      </p>
    </div>
  ));

  return (
    <div className="main-container">
      {content}
    </div>
  );
}

export default UsersList;
