<script lang="ts" setup>
import { Link } from '@inertiajs/vue3'
import { Button } from '@/Components/ui/button'
import { Github } from 'lucide-vue-next'
</script>

<template>
    <div class="min-h-screen bg-background">
        <header class="border-b">
            <div class="container flex h-16 items-center justify-between px-4 sm:px-8">
                <div class="flex items-center gap-6">
                    <h2 class="text-lg font-semibold">Full Stack Template</h2>
                    <nav class="flex gap-4">
                        <Link href="/" class="text-sm hover:text-primary">Home</Link>
                        <Link href="/about" class="text-sm hover:text-primary">About</Link>
                    </nav>
                </div>
                <div class="flex items-center gap-4">
                    <Button variant="outline" size="icon">
                        <Github class="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>

        <main>
            <slot></slot>
        </main>

        <footer class="border-t">
            <div class="container flex h-16 items-center justify-center px-4 sm:px-8">
                <p class="text-sm text-muted-foreground">
                    Built with Laravel, Vue, TypeScript & Shadcn
                </p>
            </div>
        </footer>
    </div>
</template>