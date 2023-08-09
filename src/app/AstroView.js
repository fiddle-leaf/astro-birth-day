
export default function AstroView({user}) {
    return ( 
        <output>
            {user.userInfo.name}
            {user.userInfo.location}
        </output>
     );
}