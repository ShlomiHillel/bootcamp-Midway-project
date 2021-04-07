import React from 'react';

const SideMenu = () => {
    



    return (
        <div>
            
        </div>
    );
}

export default SideMenu;



// ___________________________________________________________________________________________

const App = () => {
    const [user, setUser] = useState(null);
  
    return user ? (
        <AuthWebsite logout={() => setUser(null)} user={user} />
      ) : (
        <NoAuthWebsite login={username => setUser(username)} />
      );
  };



  const NoAuthWebsite = ({ login }) => {
    const [userName, setUserName] = useState("");
  
    return (
      <form onSubmit={() => login(userName)}>
        <input
          placeholder="username"
          required="required"
          onChange={e => setUserName(e.target.value)}
          value={userName}
        />
        <button type="submit">
          submit
        </button>
      </form>
    );
  };