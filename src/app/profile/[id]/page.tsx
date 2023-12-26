export default function UserProfilePage({params}:any){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-4xl  m-6">Profile</h1>
            <hr />
            <p>Profile Page:  <span className="p-2 rounded-lg bg-orange-600">{params.id}</span></p>
         </div>
    )
}