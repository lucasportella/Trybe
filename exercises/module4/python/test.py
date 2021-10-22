from asyncio import sleep as async_sleep
from time import sleep as time_sleep

print('Here')
async_sleep(1)
print('After')
time_sleep(1)
print('Finally')
