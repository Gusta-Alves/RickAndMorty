import { inject } from "@angular/core"
import { NavigationExtras, Router } from "@angular/router"

export const onNavigateTo = () => {
    const router = inject(Router)
    return (commands: any[], extras?: NavigationExtras | undefined) => router.navigate(commands, extras)    
}