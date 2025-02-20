<script lang="ts" setup>
import Layout from '@/Layouts/Layout.vue'
import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card'
import { Check } from 'lucide-vue-next'

const pricingPlans = [
    {
        name: 'Basic',
        price: '$9',
        interval: '/month',
        description: 'Essential features for small projects',
        features: [
            '5 Projects',
            '10GB Storage',
            'Basic Support',
            'Basic Analytics'
        ]
    },
    {
        name: 'Pro',
        price: '$29',
        interval: '/month',
        description: 'Perfect for growing teams',
        features: [
            'Unlimited Projects',
            '100GB Storage',
            'Priority Support',
            'Advanced Analytics',
            'Team Collaboration'
        ]
    },
    {
        name: 'Enterprise',
        price: '$99',
        interval: '/month',
        description: 'For large scale applications',
        features: [
            'Unlimited Everything',
            'Custom Storage',
            '24/7 Support',
            'Custom Analytics',
            'API Access',
            'SLA'
        ]
    }
]
</script>

<template>
    <Layout>
        <div class="space-y-8">
            <!-- Hero Section -->
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
                <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">Simple, transparent pricing</h1>
                <p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    Choose the perfect plan for your needs. No hidden fees.
                </p>
            </div>

            <!-- Pricing Cards -->
            <div class="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            </div>
            <Card v-for="plan in pricingPlans" :key="plan.name">
                <CardHeader>
                    <CardTitle>{{ plan.name }}</CardTitle>
                    <CardDescription>{{ plan.description }}</CardDescription>
                    <div class="mt-4">
                        <span class="text-4xl font-bold">{{ plan.price }}</span>
                        <span class="text-muted-foreground">{{ plan.interval }}</span>
                    </div>
                </CardHeader>
                <CardContent>
                    <ul class="space-y-3">
                        <li v-for="feature in plan.features" :key="feature" class="flex items-center">
                            <Check class="h-4 w-4 mr-2 text-green-500" />
                            {{ feature }}
                        </li>
                    </ul>
                </CardContent>
                <CardFooter>
                    <Button class="w-full">Get Started</Button>
                </CardFooter>
            </Card>
        </div>
    </Layout>
</template>