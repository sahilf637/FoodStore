import { AppState, Auth0Provider, User } from '@auth0/auth0-react';
import { error, log } from 'console';
import React from 'react'

type Props = {
    children: React.ReactNode
}

function Auth0ProviderWithNavigate({children}: Props) {
    const domain = import.meta.env.Auth_Domain;
    const clientId = import.meta.env.Auth_ClientId;
    const redirectUri = import.meta.env.Auth_Callback_Uri;

    if(!domain || !clientId || !redirectUri){
        console.log(domain);
        
        throw new Error("Unable to initialize auth");
    }

    const onRedirectCallback = (appState?: AppState, user?: User) => {
        console.log("USER", user)
    }
  return (
    <Auth0Provider domain={domain} clientId={clientId} authorizationParams={{
        redirect_uri: redirectUri,
    }}
    onRedirectCallback={onRedirectCallback}
    >
        {children}
    </Auth0Provider>
  )
}

export default Auth0ProviderWithNavigate