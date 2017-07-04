import React from "react"
import { MemoryRouter } from "react-router"
import { Well } from "react-bootstrap"

export const Container = story =>
  <MemoryRouter initialEntries={["/"]}>
    <Well>
      <div
        className="container"
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {story()}
      </div>
    </Well>
  </MemoryRouter>
