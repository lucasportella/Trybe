class television:
    def __init__(self, volume, channel, size, state):
        self.volume = volume
        self.channel = channel
        self.size = size
        self.state = state

    def raise_volume(self, volume_change):
        self.volume += volume_change
    
    def reduce_volume(self, volume_change):
        self.volume -= volume_change
    
    def change_channel(self, new_channel):
        self.channel = new_channel
    
    def change_state(self):
        self.state = not self.state

television1 = television(5, 12, 15, True)

television1.raise_volume(2)
print(television1.volume)

television1.change_state()
print(television1.state)