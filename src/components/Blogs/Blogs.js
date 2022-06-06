import React from 'react';

const Blogs = () => {
    return (
        <div className='text-myBlue font-semi mx-12 grid grid-cols-3 gap-9 my-5 md:my-10'>
            <div className='border p-7 rounded-lg shadow-lg'>
                <p className='text-xl font-semibold'>Question: Diffarence between Authinticathon and Authorization</p>
                <p>Answer: 1. Authentication confirms our identity to grant access to the system. <br />
                    Authorization determines whether we are authorized to access the resoureces. <br />
                    2. It is the process of validation user credentials to gain user access. <br />
                    It is process of verifying whether access is allowed or not.
                    <br />
                    3. It determines whether user is what he claims to be. <br />
                    It determints what user can and cannot access.
                    <br />
                    4. Authencatication usually requires a username and a password. <br />
                    Authentication factors required for authorization may vary, depending o the security level.
                </p>
            </div>
            <div className='border p-7 rounded-lg shadow-lg'>
                <p className='text-xl font-semibold'>Question: Why should i use firebase? Another Authentication options.</p>
                <p>
                    Answer : Firebase is fully free service that lets users log in with google account. Firebase is  good choice if we plan to either write a new application or rewrite an existing one from scratch. Additionally, Firebase helps  the easy storing and retrieval of dynamic content.  Firebase can be used when we do not want to spend a lot of time developing our own backend. It can be used for rapid development. <br />
                    Some another authenticatros are LastPass Authenticator, Microsoft Authenticator, Twilio Authy etc.
                </p>
            </div>
            <div className='border p-7 rounded-lg shadow-lg'>
                <p className='text-xl font-semibold'>Question: What services Firebase provides?</p>
                <p>Answer : Firebase provides following services: Firebase Realtime Database, Firebase Cloud Firestore, Firebase Storage, Firebase Hosting, Firebase Test Lab for Android and iOS, Firebase Dynamic Links etc.</p>
            </div>

        </div>
    );
};

export default Blogs;