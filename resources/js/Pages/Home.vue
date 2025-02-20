<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue'
import { ref, onMounted } from 'vue'
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card'

interface ShuttleStop {
  id: number
  name: string
  location: [number, number]
}

interface Shuttle {
  id: number
  name: string
  currentLocation: [number, number]
  totalSeats: number
  occupiedSeats: number
  nextStop: string
  estimatedArrival: string
}

const shuttleStops = ref<ShuttleStop[]>([
  { id: 1, name: 'Main Gate', location: [-6.123, 106.789] },
  { id: 2, name: 'Library', location: [-6.124, 106.790] },
  { id: 3, name: 'Engineering Faculty', location: [-6.125, 106.791] },
  { id: 4, name: 'Student Center', location: [-6.126, 106.792] },
])

const activeShuttles = ref<Shuttle[]>([
  {
    id: 1,
    name: 'Shuttle A',
    currentLocation: [-6.123, 106.789],
    totalSeats: 20,
    occupiedSeats: 15,
    nextStop: 'Library',
    estimatedArrival: '5 mins'
  },
  // Add more shuttles as needed
])

// Add a function to handle stop click
const handleStopClick = (stop: ShuttleStop) => {
  // For now, we'll just alert the details
  // You could also use a modal or expand the card
  alert(`Stop: ${stop.name}\nLocation: ${stop.location[0]}, ${stop.location[1]}`)
}
</script>

<template>
  <Layout>
    <div class="container py-8">
      <h1 class="text-3xl font-bold mb-6">University Shuttle Tracker</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Map Section -->
        <div class="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Live Shuttle Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="bg-muted h-[400px] rounded-lg">
                <!-- Integrate actual map here -->
                <p class="p-4">Map placeholder - Integrate with Google Maps or OpenStreetMap</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Shuttle Information -->
        <div class="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Shuttles</CardTitle>
            </CardHeader>
            <CardContent>
              <div v-for="shuttle in activeShuttles" :key="shuttle.id" class="mb-4 p-4 border rounded-lg">
                <h3 class="font-semibold">{{ shuttle.name }}</h3>
                <div class="mt-2 space-y-1 text-sm">
                  <p>Next Stop: {{ shuttle.nextStop }}</p>
                  <p>ETA: {{ shuttle.estimatedArrival }}</p>
                  <div class="mt-2">
                    <div class="flex justify-between text-xs">
                      <span>Seats Available</span>
                      <span>{{ shuttle.totalSeats - shuttle.occupiedSeats }}/{{ shuttle.totalSeats }}</span>
                    </div>
                    <div class="w-full bg-muted rounded-full h-2 mt-1">
                      <div class="bg-primary h-2 rounded-full"
                        :style="`width: ${(shuttle.occupiedSeats / shuttle.totalSeats) * 100}%`"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shuttle Stops</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-2">
                <div v-for="stop in shuttleStops" :key="stop.id"
                  class="p-2 border rounded flex justify-between items-center hover:bg-muted cursor-pointer"
                  @click="handleStopClick(stop)">
                  <span>{{ stop.name }}</span>
                  <span class="text-xs text-muted-foreground">Tap for details</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </Layout>
</template>
