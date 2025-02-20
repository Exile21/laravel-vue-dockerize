<script setup lang="ts">
import Layout from '@/Layouts/Layout.vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
</script>

<template>
    <Layout>
        <div class="container py-10">
            <div class="space-y-8">
                <div class="flex flex-col items-center justify-center space-y-4 text-center">
                    <h1 class="text-4xl font-bold">About This Template</h1>
                    <p class="mx-auto max-w-[700px] text-muted-foreground">
                        Learn more about the technologies and features included in this template
                    </p>
                </div>

                <div class="mx-auto max-w-3xl">
                    <Card>
                        <CardHeader>
                            <CardTitle>Tech Stack Overview</CardTitle>
                            <CardDescription>
                                This template combines modern technologies to provide a robust development experience
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul class="list-disc pl-6 space-y-2">
                                <li><strong>Laravel:</strong> PHP framework for building web applications</li>
                                <li><strong>Vue.js:</strong> Progressive JavaScript framework for UIs</li>
                                <li><strong>TypeScript:</strong> Adds static typing to JavaScript</li>
                                <li><strong>Docker:</strong> Containerization for consistent environments</li>
                                <li><strong>Shadcn:</strong> UI components for modern applications</li>
                                <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </Layout>
</template>