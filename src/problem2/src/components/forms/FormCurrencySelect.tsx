import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CurrencyItem } from "@/types";
import { Check, ChevronsUpDown, Loader2 } from "lucide-react";
import { Control } from "react-hook-form";

const DOMAIN_AVATAR =
  "https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  currencyList: CurrencyItem[];
  isLoading: boolean;
  onchange?: (currency: string) => void;
  name: string;
  label?: string;
  omit?: string[];
}

export default function FormCurrencySelect({
  control,
  currencyList,
  isLoading,
  onchange,
  name,
  label,
  omit,
}: Props) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-[80px]">
          <FormLabel className="!text-zinc-950">{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-[80px] justify-between",
                    !field.value && "text-zinc-500"
                  )}
                >
                  <span className="w-auto line-clamp-1">
                    {field.value ? (
                      <Avatar className="w-5 h-5">
                        <AvatarImage
                          src={`${DOMAIN_AVATAR}/${field.value.toUpperCase()}.svg`}
                          alt={field.value}
                        />
                        <AvatarFallback>{field.value}</AvatarFallback>
                      </Avatar>
                    ) : (
                      ""
                    )}
                  </span>
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[150px] p-0">
              <Command>
                <CommandInput placeholder="Search..." className="h-9" />
                <CommandList>
                  <CommandEmpty>
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "No currency found."
                    )}
                  </CommandEmpty>
                  <CommandGroup>
                    {currencyList
                      ?.filter((item) => {
                        return !omit?.includes(item.currency);
                      })
                      ?.map((item) => (
                        <CommandItem
                          value={item.currency}
                          key={item.currency}
                          onSelect={() => {
                            field.onChange(item.currency);
                            onchange?.(item.currency);
                          }}
                        >
                          <div className="flex gap-2">
                            <Avatar className="w-5 h-5">
                              <AvatarImage
                                src={`${DOMAIN_AVATAR}/${item.currency.toUpperCase()}.svg`}
                                alt={item.currency}
                              />
                              <AvatarFallback>{item.currency}</AvatarFallback>
                            </Avatar>
                            <span className="w-13 line-clamp-1 font-medium">
                              {item.currency}
                            </span>
                          </div>
                          <Check
                            className={cn(
                              "ml-auto",
                              item.currency === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
