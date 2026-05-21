'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';

const MyProfile = () => {
  const { data: session } = authClient.useSession();
  const sessionUser = session?.user;

  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: '',
    email: '',
    image: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    image: '',
  });

  
  useEffect(() => {
    if (sessionUser) {
      const data = {
        name: sessionUser.name || '',
        email: sessionUser.email || '',
        image: sessionUser.image || '',
      };

      setUser(data);
      setFormData(data);
    }
  }, [sessionUser]);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md bg-white shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

      
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
            {user.image ? (
              <Image
                src={user.image}
                alt="profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-2xl">👤</span>
            )}
          </div>

          {isEditing && (
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="mt-3 w-full p-2 border rounded-lg"
            />
          )}
        </div>

       
        {!isEditing ? (
          <p className="text-center text-lg font-semibold mb-2">{user.name}</p>
        ) : (
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-3 p-3 border rounded-lg"
          />
        )}

      
        {!isEditing ? (
          <p className="text-center text-gray-600 mb-5">{user.email}</p>
        ) : (
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-5 p-3 border rounded-lg"
          />
        )}

    
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
           Update Profile
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="w-full bg-green-600 text-white py-3 rounded-lg"
          >
            Update
          </button>
        )}
      </div>
    </div>
  );
};
export default MyProfile;
