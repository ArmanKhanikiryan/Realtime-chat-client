export default function generateChatBot(user) {
  const avatarImage =
    'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzEgMjMxIj48cGF0aCBkPSJNMzMuODMsMzMuODNhMTE1LjUsMTE1LjUsMCwxLDEsMCwxNjMuMzQsMTE1LjQ5LDExNS40OSwwLDAsMSwwLTE2My4zNFoiIHN0eWxlPSJmaWxsOiMxODEyODQ7Ii8+PHBhdGggZD0ibTExNS41IDUxLjc1YTYzLjc1IDYzLjc1IDAgMCAwLTEwLjUgMTI2LjYzdjE0LjA5YTExNS41IDExNS41IDAgMCAwLTUzLjcyOSAxOS4wMjcgMTE1LjUgMTE1LjUgMCAwIDAgMTI4LjQ2IDAgMTE1LjUgMTE1LjUgMCAwIDAtNTMuNzI5LTE5LjAyOXYtMTQuMDg0YTYzLjc1IDYzLjc1IDAgMCAwIDUzLjI1LTYyLjg4MSA2My43NSA2My43NSAwIDAgMC02My42NS02My43NSA2My43NSA2My43NSAwIDAgMC0wLjA5OTYxIDB6IiBzdHlsZT0iZmlsbDojZmZmOyIvPjxwYXRoIGQ9Im0xNDEuNzUgMTk1YTExNC43OSAxMTQuNzkgMCAwIDEgMzggMTYuNSAxMTUuNTMgMTE1LjUzIDAgMCAxLTEyOC40NiAwIDExNC43OSAxMTQuNzkgMCAwIDEgMzgtMTYuNWMwIDEwLjc2IDExLjc1IDE5LjQ4IDI2LjI1IDE5LjQ4czI2LjI1LTguNzIgMjYuMjUtMTkuNDh6IiBzdHlsZT0iZmlsbDojZmZmOyIvPjxwYXRoIGQ9Im05Mi41MDIgMTk0LjI3djAuNzAzOTFjMCA0LjMwMzMgMi40MzczIDguMjU4MyA2LjM4MDcgMTEuMTgzIDQuMjE5OSAzLjEyMDQgMTAuMTA2IDUuMDUwOCAxNi42NjEgNS4wNTA4IDYuNTQ4IDAgMTIuNDM0LTEuOTMwMyAxNi42NTQtNS4wNTA4IDMuOTQzNC0yLjkyNDUgNi4zODgtNi44Nzk1IDYuMzg4LTExLjE4M3YtMC42NzQ4OWMxLjA3NjggMC4yMTc3MSAyLjE0NjMgMC40NDk5NCAzLjIxNTggMC42OTY2NmgtN2UtM2MxLjA2OTUgMC4yNDY3MiAyLjEzMTggMC41MDc5OCAzLjE4NjcgMC43OTEtMC4yNzY0OCA2LjEwMy0zLjY1MjQgMTEuNTUzLTguOTcwOCAxNS40OTMtNS4yODIxIDMuOTExNC0xMi41MjEgNi4zMjgtMjAuNDY2IDYuMzI4LTcuOTQ0OSAwLTE1LjE4NC0yLjQxNjUtMjAuNDc0LTYuMzI4LTUuMzMzLTMuOTQ3Ny04LjcwODktOS40MTk0LTguOTcwOC0xNS41NDQgMS4wNTUtMC4yNzU3NyAyLjEwOTktMC41MzcwMiAzLjE3MjItMC43ODM3NiAxLjA2OTUtMC4yMzk0NyAyLjE0NjMtMC40NjQ0MyAzLjIzMDQtMC42ODIxM3oiIHN0eWxlPSJmaWxsOiMwMDA7Ii8+PHBhdGggZD0ibTMwLjYyMiA3MC4zODFjMi4wOTcxLTMuOTM3NCA0LjY2NDktNy45NjA0IDcuNjgyMi0xMi4wMzcgMy4wMTcyLTQuMDc2NSA2LjA5ODctNy42OTI5IDkuMjIyOS0xMC44MTdsMjIuODk3IDIyLjg5N2MtNC40NDAyIDQuNDQwMy04LjIyNzggOS41NDM5LTExLjIxMyAxNS4xNHoiIHN0eWxlPSJmaWxsOiMxNGZmZmQ7Ii8+PHBhdGggZD0ibTE2MC41OCA3MC40MjMgMjIuOTA3LTIyLjg5N2MzLjEyNDIgMy4xMjQyIDYuMjA1NiA2Ljc0MDYgOS4yMjI5IDEwLjgxNyAzLjAwNjUgNC4wNzY1IDUuNTc0NCA4LjA5OTQgNy42NzE1IDEyLjAzN2wtMjguNTc4IDE1LjE4MmMtMi45ODUxLTUuNTk1OC02Ljc3MjctMTAuNjg5LTExLjIyNC0xNS4xNHoiIHN0eWxlPSJmaWxsOiMxNGZmZmQ7Ii8+PHBhdGggZD0ibTkyLjQxMSAxNS4yNDdjMy44MTk3LTAuODc3MzYgNy42NzE1LTEuNTQwNyAxMS41MzQtMS45Nzk0IDQuMDc2NS0wLjQ2MDA3IDcuOTI4Mi0wLjY5NTQ2IDExLjU1NS0wLjY5NTQ2IDEuNTMgMCAzLjE1NjMgMC4wNDI4IDQuODY4MiAwLjEzOTFsMS44NTEgMjIuMjU1IDUuNzY3LTIxLjU3YzMuMTAyOCAwLjM3NDQ5IDYuMDY2NiAwLjg2NjY2IDguODkxMiAxLjQ2NThsLTEwLjU1IDQ5Ljc2M2MtMS45MjU5LTAuNDE3MjktMy43MDItMC43MDYxNy01LjMxNzYtMC44NzczNi0xLjQyMy0wLjE0OTc5LTMuMjYzMy0wLjIyNDY4LTUuNTEwMi0wLjIyNDY4LTIuMjM2MiAwLTQuMjM3IDAuMTA2OTktNS45ODEgMC4yOTk1OC0xLjk0NzMgMC4yMjQ2OS0zLjg3MzIgMC41NTYzNi01Ljc2NyAwLjk5NTA0eiIgc3R5bGU9ImZpbGw6IzE0ZmZmZDsiLz48cGF0aCBkPSJtOTIuNDExIDE1LjI0N2MxLjkxNTItMC40Mzg2OSA0LjAyMy0wLjg0NTI2IDYuMzIzMy0xLjIzMDQgMi4wNjUtMC4zNDIzOCA0LjE1MTQtMC42MjA1NyA2LjI2OTgtMC44NDUyNWw1LjE3ODUgNTAuNTY1Yy0xLjA5MTMgMC4xMDY5OS0yLjE4MjcgMC4yNTY3OS0zLjI5NTQgMC40Mzg2OC0wLjg2NjY1IDAuMTQ5NzktMS45MTUyIDAuMzYzNzgtMy4xMzQ5IDAuNjQxOTZ6IiBzdHlsZT0iZmlsbDojMGQzYTYyOyIvPjxsaW5lIHgxPSI4NS4yOSIgeDI9Ijg1LjI5IiB5MT0iOTguNzMiIHkyPSIxMDkuNzkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDo4Ljc5OTlweDtzdHJva2U6YmxhY2s7Ii8+PHBhdGggZD0ibTEwOC4yOCA3Mi4xNmg2Mi4xOGM5LjE5IDAgMTMuMzIgMS4yMSAxNC43MSA4LjUyIDMuNjEgMTguOTUgMi4yIDMzLjQ5LTAuNDQgNDMuNzVhNjUuMDcgNjUuMDcgMCAwIDEtNS44OSAxNC43OCA3My41MiA3My41MiAwIDAgMS03LjA2IDEwLjI2Yy0xLjggMi4yNy01LjE3IDEuMjEtNC4xOS0xLjA5IDAuMTQtMC40NyAwLjI3LTEgMC40LTEuNDhhMTQuMjkgMTQuMjkgMCAwIDAgMC41Mi02LjYyIDEyLjUyIDEyLjUyIDAgMCAwLTMuODgtNi4zYy00LjE3LTMuOS0xMi44MS04LjcxLTMyLjUzLTEzLjY2LTYuNC0xLjYtMTAuNjktMi4yNC0xMS43Ni0yLjc5YTcuMDggNy4wOCAwIDAgMS0zLjg1LTYuMzF2LTljMC0yLjM5IDAuMTgtNC41NS0xLjU2LTYuNTdzLTQuMTYtMi4xMy02LjY1LTIuMTRhNiA2IDAgMCAxLTYtNnYtOS4zNWE2IDYgMCAwIDEgNi02eiIgc3R5bGU9ImZpbGw6IzFkZjdmZjtvcGFjaXR5OjAuNjQ7Ii8+PHBhdGggZD0ibTEzNS45IDk4LjczdjkuMjdtMTUuMjItOS4yOXY5LjI5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6Ny43OTk4cHg7c3Ryb2tlOiNmY2ZmMmM7Ii8+PHBhdGggZD0ibTEzNi4yMSAxNDcuMDlhMjEuNzcgMjEuNzcgMCAwIDEtNDAuMTMgMHoiIHN0eWxlPSJmaWxsOiNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDozLjQ5OTlweDtzdHJva2U6IzAwMDsiLz48L3N2Zz4=';
  return {
    avatarImage,
    chatType: 'user',
    isOnline: true,
    latestMessage: '',
    latestMessageSender: user._id,
    latestMessageUpdatedAt: '',
    name: 'Chatty Bot',
    unreadCount: 0,
    _id: '1'
  };
}
