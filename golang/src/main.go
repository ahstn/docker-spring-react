package main

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func main() {
  router := gin.Default()
  api := router.Group("/api/v1")
  api.GET("/", func(c *gin.Context) {
    c.String(http.StatusOK, "API v1", nil)
  })

  router.Run(":3000")
}
