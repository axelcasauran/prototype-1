// import { useState } from 'react';
// import { RiCheckboxCircleFill, RiErrorWarningFill } from '@remixicon/react';
// import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { Row } from '@tanstack/react-table';
// import { ChevronDown } from 'lucide-react';
// import { toast } from 'sonner';
// import { Alert, AlertIcon, AlertTitle } from '@reui/ui/alert';
// import { Badge, BadgeProps } from '@reui/ui/badge';
// import { Button } from '@reui/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@reui/ui/dropdown-menu';
// import { Spinner } from '@reui/ui/spinners';
// import {
//   EcommerceCategory,
//   EcommerceCategoryStatus,
// } from '@/app/models/ecommerce';
// import {
//   DepartmentStatusProps,
//   getDepartmentStatusProps,
// } from '../constants/department';
// import { Department } from '@/app/models/department';

// export const DepartmentStatusCell = ({
//   row,
// }: {
//   row: Row<Department>;
// }) => {
//   const queryClient = useQueryClient();
//   const [status, setStatus] = useState(row.original.status);
//   const statusProps = getDepartmentStatusProps(status as EcommerceCategoryStatus);
//   const { id } = row.original;

//   // Mutation for updating status
//   const mutation = useMutation({
//     mutationFn: async (newStatus: string) => {
//       const response = await fetch(`/api/admin/departments/${id}/status`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!response.ok) {
//         const { message } = await response.json();
//         throw new Error(message);
//       }

//       return newStatus;
//     },
//     onSuccess: (newStatus) => {
//       setStatus(newStatus as EcommerceCategoryStatus);
//       queryClient.invalidateQueries({
//         queryKey: ['ecommerce-categories'],
//       });

//       toast.custom((t) => (
//         <Alert variant="mono" icon="success" onClose={() => toast.dismiss(t)}>
//           <AlertIcon>
//             <RiCheckboxCircleFill />
//           </AlertIcon>
//           <AlertTitle>Category status updated successfully</AlertTitle>
//         </Alert>
//       ));
//     },
//     onError: (error: Error) => {
//       toast.custom(() => (
//         <Alert variant="mono" icon="destructive" close={true}>
//           <AlertIcon>
//             <RiErrorWarningFill />
//           </AlertIcon>
//           <AlertTitle>{error.message}</AlertTitle>
//         </Alert>
//       ));
//     },
//   });

//   // Derive the loading state from the mutation status
//   const isLoading = mutation.status === 'pending';

//   return (
//     <div className="inline-flex items-center gap-1">
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="ghost" className="-ms-1 ps-2.5 h-7 px-1.5">
//             <Badge
//               variant={statusProps.variant as keyof BadgeProps['variant']}
//               appearance="ghost"
//             >
//               {statusProps.label}
//             </Badge>
//             {isLoading ? (
//               <Spinner className="size-3.5! animate-spin" />
//             ) : (
//               <ChevronDown className="size-3.5! text-muted-foreground" />
//             )}
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="w-36" side="bottom" align="start">
//           <DropdownMenuLabel>Change status</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           <DropdownMenuRadioGroup
//             value={status}
//             onValueChange={(value) => mutation.mutate(value)}
//           >
//             <DropdownMenuRadioItem value="ACTIVE">
//               {DepartmentStatusProps.ACTIVE.label}
//             </DropdownMenuRadioItem>
//             <DropdownMenuRadioItem value="INACTIVE">
//               {DepartmentStatusProps.INACTIVE.label}
//             </DropdownMenuRadioItem>
//           </DropdownMenuRadioGroup>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// };
