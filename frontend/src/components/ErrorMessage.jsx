import { Typography } from "@mui/material"
import { useState } from "react"


function ErrorMessage(message) {
    const [error, setError] = useState("")
    return(
        <Typography variant="h4">{message}</Typography>
    )
}

export default ErrorMessage