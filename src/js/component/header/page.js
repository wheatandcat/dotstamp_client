// @flow
import React from "react"
import { Login, NoLogin } from "./"

type Props = {
  login: boolean,
  name: string,
  logout: () => void
}

export default ({ login, name, logout }: Props) =>
  <div>
    {(() => {
      if (login) return <Login name={name} logout={logout} />
      else return <NoLogin />
    })()}
  </div>
